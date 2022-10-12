import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { groupsService } from "./GroupsService.js";

class GroupMembersService {
  async kickMember(groupMemberId, accountId, body) {
    const member = await this.getGroupMemberById(groupMemberId);
    // @ts-ignore
    const group = await groupsService.getGroupById(member.groupId.toString());
    // @ts-ignore
    let isCreator = accountId == group.creatorId.toString();
    // @ts-ignore
    let isMember = member.accountId.toString() == accountId;
    if (!isCreator && !isMember) {
      throw new Forbidden("you can only remove yourself from a group");
    }
    if (isCreator && isMember) {
      group.creatorId = body.accountId;
      await group.save();
      // @ts-ignore
      await member.remove();
    }
    // if (!isMember) {
    //   throw new Forbidden(
    //     "you need to be apart of a group to remove yourself from it"
    //   );
    // }
    // @ts-ignore
    await member.remove();
    return member;
    // TODO finish remove member
  }
  async addGroupMember(groupId, accountId) {
    const group = await groupsService.getGroupById(groupId);
    const groupMembers = await this.getGroupMembersByGroupId(groupId);
    const alreadyMember = groupMembers.find(
      (g) => g.accountId == accountId);
    if (alreadyMember) {
      throw new Forbidden("you are already apart of this group");
    }
    const newGroupMember = await dbContext.GroupMembers.create(groupId, accountId);
    group.groupMemberIds.push(accountId);
    await group.save();
    // @ts-ignore
    await newGroupMember.populate("account", "name picture");
    // @ts-ignore
    await newGroupMember.populate("group", "name");
    return newGroupMember;
  }
  async getGroupMembersByGroupId(groupId) {
    const groupMembers = await dbContext.GroupMembers.find({
      groupId,
    }).populate("account", "name picture");
    if (!groupMembers) {
      throw new BadRequest("bad group id");
    }
    return groupMembers;
  }
  async getGroupMemberById(id) {
    const member = await dbContext.GroupMembers.find({ id });
    if (!member) {
      throw new BadRequest("bad goldMemberId");
    }
    return member;
  }
  //
}
export const groupMembersService = new GroupMembersService();