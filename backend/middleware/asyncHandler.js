export default (asyncHandler) => (req, res, next) => {
    Promise.resolve(asyncHandler(req, res)).catch(next);
}