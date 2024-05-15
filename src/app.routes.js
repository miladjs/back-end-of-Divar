const { Router } = require("express");
const { AuthRouter } = require("./modules/auth/auth.routes");
const { UserRouter } = require("./modules/user/user.routes");
const { CategoryRouter } = require("./modules/category/category.routes");
const { OptionRoutes } = require("./modules/option/option.routes");
const { PostRouter } = require("./modules/post/post.routes");
const Authorization = require("./common/guard/authorization.guard");
const postController = require("./modules/post/post.controller");
const mainRouter = Router();
mainRouter.use("/auth", AuthRouter);
mainRouter.use("/user", UserRouter);
mainRouter.use("/category", CategoryRouter);
mainRouter.use("/option", OptionRoutes);
mainRouter.use("/post", PostRouter);
mainRouter.get("/", postController.postList);

module.exports = mainRouter;
