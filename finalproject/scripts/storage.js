const FILTER_KEY = "selectedFilter";

export function saveFilter(filter) {
    try {
        localStorage.setItem(FILTER_KEY, filter);
    } catch (error) {
        console.error("Unable to save filter:", error);
    }
}

export function getSavedFilter() {
    try {
        return localStorage.getItem(FILTER_KEY) || "all";
    } catch (error) {
        console.error("Unable to read saved filter:", error);
        return "all";
    }
}