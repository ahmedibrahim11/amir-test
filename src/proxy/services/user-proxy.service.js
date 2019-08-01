import { BASE_URL } from "../../sevices/constants";
export class UserProxyService {
    async getUsers() {
        return await fetch(`${BASE_URL}`, {
            method: "get",
            headers: { "content-Type": "application/json" }
        });
    }


    async getUserById(userId: number) {
        return await fetch(`${BASE_URL}/${userId}`, {
            method: "get",
            headers: { "content-Type": "application/json" }
        });
    }
}
