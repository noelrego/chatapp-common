export enum N_MsgPatternAuthUserService  {
    GET_ALL_USERS = 'get_all_users',
    REGISTER_USER = 'register_user',
    LOGIN_USER = 'login_user',
    CHECK_USERNAME = 'check_username',
    SOCKET_UPDATE_USER_STATUS = 'updateUserInfoStatus',
    CREATE_MEMBER = 'createMember',
    GET_MEMBER = 'getMember',
    GET_RECIPIENT_LIST = 'getRecipientList',
    GET_AVAILABLE_LIST = 'getAvailableList'
}

export enum N_SocketUpdateAction {
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    STATUS_UPDATE = 'statusUpdate'
}