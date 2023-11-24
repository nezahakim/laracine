const session = window.sessionStorage;
export default session;
export const unique_id = session.getItem('userId');
export const AccountData = window.localStorage.getItem("AccountData")


