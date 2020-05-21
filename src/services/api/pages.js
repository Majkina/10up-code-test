import { doGet } from "./base";

/** Disabling eslint for next line as pressumably in
the future there'll be more requests exported */

// eslint-disable-next-line import/prefer-default-export
export const getPages = () => doGet("wp/v2/pages");
