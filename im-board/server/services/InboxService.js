import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class InboxService {
  async deleteInvite(accountId, id) {
    const invite = await dbContext.Inbox.find({ id });
    // @ts-ignore
    const account = await dbContext.Account.findById(accountId);
    if (invite.toAccountId !== account.id) {
      throw new BadRequest("not your invite");
    }
    await invite.remove();

    await account.inbox.find((p) => p.id.toString() == id).remove();
    await account.save();
    return invite;
  }
  async sendInvite(body) {
    debugger
    if (body.creatorId == body.toAccountId) {
      throw new Forbidden("why are you inviting yourself");
    }
    const invite = await dbContext.Inbox.create(body);
    if (!invite) {
      throw new BadRequest("no invite");
    }
    let accountInbox = await dbContext.Account.findById(body.toAccountId);
    // @ts-ignore
    accountInbox.inbox.push(invite);
    await accountInbox.save();
    return invite;
  }
  async getInbox(accountId) {
    const box = await dbContext.Inbox.find({ toAccountId: accountId })
      .populate("group", "name coverImg")
      .populate("creator", "name picture");
    if (!box) {
      throw new BadRequest("no inbox");
    }
    return box;
  }

  //
}
export const inboxService = new InboxService();