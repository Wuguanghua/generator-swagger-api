"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
let beautify = require("gulp-beautify");

const codegen = require("../codegen");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the beautiful ${chalk.red(
          "generator-swagger-api"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "className",
        message: "请输入生成器 className",
        default: "Api"
      },
      {
        type: "list",
        name: "templateType",
        message: "请选择模板文件",
        choices: ["ts.ejs", "js.ejs"],
        default: "ts.ejs"
      },
      {
        type: "input",
        name: "outPutFile",
        message: "请输入输出文件名(没有文件后缀)",
        default: "api"
      },
      {
        type: "input",
        name: "sourceFile",
        message: "请把 swagger.json 文件拖拽到这里"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let clsName = this.props.className;
    let sourceFile = this.props.sourceFile;
    let templateType = this.props.templateType;
    let outPutFile = this.props.templateType === 'js.ejs' ? this.props.outPutFile + '.js' : this.props.outPutFile + '.ts';
    if (!sourceFile) {
      return this.log("未检测到swagger文件，请将 swagger.json 文件拖拽至此重试！");
    }
    let swaggerData = codegen.getViewForSwagger({
      swagger: this.fs.read(sourceFile),
      className: clsName
    });
    this.fs.copyTpl(
      this.templatePath(templateType),
      this.destinationPath(outPutFile),
      swaggerData
    );

    this.registerTransformStream(beautify({ indentSize: 4 }));
  }

  install() {
    // This.installDependencies();
  }
};
