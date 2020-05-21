/** Disabling eslint for next line as pressumably in
the future there'll be more util functions exported */

/* eslint-disable import/prefer-default-export */
export const getPageBySlug = (pages, slug) =>
  pages.find((page) => page.slug === slug);
