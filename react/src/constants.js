export const ACTIONS = {
    CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE',
    ALL_PAGES_FETCH: 'ALL_PAGES_FETCH',
    ALL_PAGES_ERROR: 'ALL_PAGES_ERROR',
    ALL_PAGES_RECEIVED: 'ALL_PAGES_RECEIVED',
    FEEDREADER_DATA_FETCH: 'FEEDREADER_DATA_FETCH',
    FEEDREADER_DATA_RECEIVED: 'FEEDREADER_DATA_RECEIVED',
    FEEDREADER_FETCH_ERROR: 'FEEDREADER_FETCH_ERROR',
    FEEDREADER_TOGGLE_ENTRY_READ: 'FEEDREADER_TOGGLE_ENTRY_READ',
    FEEDREADER_TOGGLE_ENTRY_READ_DONE: 'FEEDREADER_TOGGLE_ENTRY_READ_DONE',
    FEEDREADER_TOGGLE_ENTRY_READ_ERROR: 'FEEDREADER_TOGGLE_ENTRY_READ_ERROR'
};

export const API_URL_PREFIX = '/api/v1';
export const API_URL_ALL_PAGES = API_URL_PREFIX + '/pages/';
export const API_URL_ALL_ENTRIES = API_URL_PREFIX + '/entries/';
export const API_URL_ENTRY = API_URL_PREFIX + '/entries/';
export const API_URL_ALL_FEEDS = API_URL_PREFIX + '/feeds/';
export const API_URL_ALL_GROUPS = API_URL_PREFIX + '/groups/';

export const ADMIN_URL = '/admin/';

export const HOME_PAGE = {id: 'home', title: 'ahernp.com', link: '/', slug: 'home'};
export const DASHBOARD_PAGE = {id: 'dashboard', title: 'Dashboard', link: '/dashboard', slug: 'dashboard'};
export const SITE_MAP = {id: 'site-map', title: 'Site Map', link: '/sitemap', slug: 'site-map'};
export const TOOLS_PAGE = {id: 'tools', title: 'Tools', link: '/tools', slug: 'tools'};
export const FEEDREADER_PAGE = {id: 'feedreader', title: 'Feedreader', link: '/feedreader', slug: 'feedreader'};

export const DYNAMIC_PAGES = [
    HOME_PAGE,
    DASHBOARD_PAGE,
    SITE_MAP,
    TOOLS_PAGE
];

export const PAGE_PARENT_ATTRIBUTE = 'parent_id';
