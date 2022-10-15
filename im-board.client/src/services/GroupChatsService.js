import { AppState } from "../AppState.js";
import { GroupChat } from "../models/GroupChat.js";
import { api } from "./AxiosService.js";

class GroupChatsService {
  async getGroupChatsByGroupId(groupId) {
    const res = await api.get(`api/groupchats/${groupId}`);
    console.log(res.data);
  }
  async addGroupChat(chatData) {
    const res = await api.post(`api/groupchats/`, chatData);
    console.log(res.data);
    AppState.groupChats = [...AppState.groupChats, new GroupChat(res.data)];
  }
}
export const groupChatsService = new GroupChatsService();