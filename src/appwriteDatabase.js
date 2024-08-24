import { Client, Account, ID } from "appwrite";

const AppwriteConnect = () => {
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('663e70370012ecbb3ba5');

    const appwriteAccount = new Account(client);

    return appwriteAccount;
}

export default AppwriteConnect;