"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
let beautify = require("gulp-beautify");

const codegen = require("../codegen");

const swaggerJson = require("../swagger.json");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the beautiful ${chalk.red(
          "generator-swagger-api-tool"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "className",
        message: "please enter class Name of the generated API",
        default: "Api"
      },
      {
        type: "input",
        name: "outPutFile",
        message: "Please enter the API file name",
        default: "api.ts"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let clsName = this.props.className;
    let outPutFile = this.props.outPutFile;
    let swaggerData = codegen.getViewForSwagger({
      swagger: swaggerJson,
      className: clsName
    });
    this.fs.copyTpl(
      this.templatePath("ts.ejs"),
      this.destinationPath(outPutFile),
      swaggerData
    );

    this.registerTransformStream(beautify({ indentSize: 4 }));
  }

  install() {
    // This.installDependencies();
  }
};
