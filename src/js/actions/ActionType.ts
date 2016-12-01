export enum ActionType {
    LOGOUT,

    LOGIN_CHANGE_HOST_INPUT,
    LOGIN_CHANGE_PORT_INPUT,
    LOGIN_CHANGE_USERNAME_INPUT,
    LOGIN_CHANGE_PASSWORD_INPUT,
    LOGIN_INVALID_SUBMIT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_CLOSE_ALERT,

    MENU_CLICK_ID,
    MENU_CLICK_CONFIG,
    MENU_CLICK_PROJECTS,
    MENU_CLICK_ENGAGEMENTS,
    MENU_CLICK_LOGS,
    MENU_CLICK_ASSETS,
    MENU_CLICK_TOOLS,
    MENU_CLICK_MAIL,

    USER_INIT,
    USER_OPEN_EDIT,
    USER_CANCEL_EDIT,
    USER_CANCEL_ADD,
    USER_OPEN_ADD,
    USER_TOGGLE_VIEW,
    USER_CHANGE_USERNAME_INPUT,
    USER_CHANGE_PASSWORD_INPUT,
    USER_CHANGE_CONFIRM_INPUT,
    USER_CHANGE_FIRSTNAME_INPUT,
    USER_CHANGE_LASTNAME_INPUT,
    USER_CHANGE_EMAIL_INPUT,
    USER_INVALID_SUBMIT,
    USER_ADD_SUCCESS,
    USER_EDIT_SUCCESS,
    USER_REMOVE_SUCCESS,

    CLIENT_CHANGE_NAME_INPUT,
    CLIENT_CHANGE_URL_INPUT,
    CLIENT_SELECT_TIMEZONE,

    PROFILE_CHANGE_PASSWORD_INPUT,
    PROFILE_CHANGE_NEW_PASSWORD_INPUT,
    PROFILE_CHANGE_CONFIRM_INPUT,
    PROFILE_INVALID_SUBMIT,

    CRUD_INIT,
    CRUD_OPEN_EDIT,
    CRUD_CANCEL_EDIT,
    CRUD_OPEN_ADD,
    CRUD_CANCEL_ADD,
    CRUD_TOGGLE_VIEW,
    CRUD_ADD_SUCCESS,
    CRUD_EDIT_SUCCESS,
    CRUD_REMOVE_SUCCESS,
    CRUD_INVALID_SUBMIT,
    CRUD_CANCEL,

    EMAIL_SERVER_CHANGE_USE_TLS_INPUT,
    EMAIL_SERVER_CHANGE_TEST_RECIPIENT_INPUT,
    EMAIL_SERVER_CHANGE_HOST_INPUT,
    EMAIL_SERVER_CHANGE_LOGIN_INPUT,
    EMAIL_SERVER_CHANGE_PASSWORD_INPUT,
    EMAIL_SERVER_CHANGE_PORT_INPUT,

    PHISHING_DOMAIN_CHANGE_DOMAIN_NAME_INPUT,

    SCHEDULE_CHANGE_NAME_INPUT,
    SCHEDULE_CHANGE_BATCH_SIZE_INPUT,
    SCHEDULE_CHANGE_BATCH_INTERVAL_INPUT,
    SCHEDULE_CHANGE_SLEEP_TIME_INPUT,
    SCHEDULE_CHANGE_START_SENDING_INPUT,

    CAMPAIGN_SUGGESTIONS_POPULATED,
    CAMPAIGN_SUGGESTIONS_LOADING,

    PHISHING_DOMAIN_SUGGESTIONS_POPULATED,
    PHISHING_DOMAIN_SUGGESTIONS_LOADING,

    SCHEDULE_SUGGESTIONS_POPULATED,
    SCHEDULE_SUGGESTIONS_LOADING,

    EMAIL_SERVER_SUGGESTIONS_POPULATED,
    EMAIL_SERVER_SUGGESTIONS_LOADING,

    EMAIL_TEMPLATE_SUGGESTIONS_POPULATED,
    EMAIL_TEMPLATE_SUGGESTIONS_LOADING,

    LANDING_PAGE_SUGGESTIONS_POPULATED,
    LANDING_PAGE_SUGGESTIONS_LOADING,

    REDIRECT_PAGE_SUGGESTIONS_POPULATED,
    REDIRECT_PAGE_SUGGESTIONS_LOADING,

    SCRAPER_USER_AGENT_SUGGESTIONS_POPULATED,
    SCRAPER_USER_AGENT_SUGGESTIONS_LOADING,

    OPEN_EDITOR,
    EDITOR_OK,
    EDITOR_CANCEL,

    CLIENT_SUGGESTIONS_POPULATED,
    CLIENT_SUGGESTIONS_LOADING,

    SHOAL_SCRAPE_CRED_SUGGESTIONS_POPULATED,
    SHOAL_SCRAPE_CRED_SUGGESTIONS_LOADING,

    O_AUTH_CONSUMER_SUGGESTIONS_POPULATED,
    O_AUTH_CONSUMER_SUGGESTIONS_LOADING,

    ENGAGEMENT_TOGGLE_PREVIEW,
    EMAIL_PREVIEW_CONFIRMED,
    LANDING_PAGE_PREVIEW_CONFIRMED,
    REDIRECT_PAGE_PREVIEW_CONFIRMED,

    EMAIL_TEMPLATE_SHORTCODE_CHECK,

    ENGAGEMENT_START,
    ENGAGEMENT_STOP,

    EMAIL_SERVER_EMAIL_CHECK,
}   