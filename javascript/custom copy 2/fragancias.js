import { initializeFilters } from './filter.js';
import { setupPagination } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  setupPagination();
  console.log("e mano")
});
