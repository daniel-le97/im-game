import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
import { groupsService } from "./GroupsService.js";

class GroupMembersService {
  async kickMember(groupMemberId, accountId, newAccountId) {
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
      group.creatorId = newAccountId;
      const memberIndex = group.groupMemberIds.findIndex(accountId)
      group.groupMemberIds.splice(memberIndex, 1)
      await group.save();
      // @ts-ignore
      await member.remove();
      return
    }

    // @ts-ignore
    await member.remove();
    const memberIndex = group.groupMemberIds.findIndex(accountId)
    group.groupMemberIds.splice(memberIndex, 1)
    await group.save()
    // TODO finish remove member
    return
  }
  async getMemberForGroup(groupId, accountId) {
    const member = await dbContext.GroupMembers.findOne({ groupId, accountId })
      .populate("profile", "name picture")
      .populate("group", "name coverImg");
    return member;
  }
  async addGroupMember(groupId, accountId) {
    const group = await groupsService.getGroupById(groupId);
    const isMember = await this.getMemberForGroup(groupId, accountId);
    if (isMember) {
      return isMember;
    }
    const groupMember = await dbContext.GroupMembers.create({
      groupId,
      accountId,
    });
    if (!group.groupMemberIds.includes(accountId)) {
      group.groupMemberIds.push(accountId);
    }
    await group.save();
    await groupMember.populate("profile", "name picture");

    return groupMember;
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
    const member = await dbContext.GroupMembers.findById(id);
    if (!member) {
      throw new BadRequest("bad goldMemberId");
    }
    return member;
  }
  //
}
export const groupMembersService = new GroupMembersService();
