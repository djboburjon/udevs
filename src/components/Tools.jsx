import React, { useState } from "react";

function Tools() {
  const [frontend, setFrontend] = useState("on");
  const [backend, setBackend] = useState("on");
  const [devops, setDevops] = useState("on");
  const [testing, setTesting] = useState("on");
  const [ux, setUx] = useState("on");
  const [infrastructure, setInfrastructure] = useState("on");
  const [mobile, setMobile] = useState("on");
  const [selectedTool, setSelectedTool] = useState("");

  const handleChange = (event) => {
    setSelectedTool(event.target.id);
  };
  // console.log(devops, mobile);
  return (
    <div id="tools" className="bg-[#F4F7FF] bg-no-repeat bg-cover py-24">
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">Tools</h1>
        <form action="" className="flex items-center mb-12">
          <input
            className="peer p-2 w-6 h-6 mr-2 cursor-pointer"
            type="radio"
            id="choice1"
            name="tools"
            onChange={handleChange}
          />
          <label
            className="mr-5 font-extrabold text-sm cursor-pointer"
            htmlFor="choice1"
          >
            Frontend
          </label>
          <input
            className="p-2 w-6 h-6 mr-2 cursor-pointer bg-transparent"
            type="radio"
            id="choice2"
            name="tools"
            onChange={handleChange}
          />
          <label
            className="mr-5 font-extrabold text-sm cursor-pointer"
            htmlFor="choice2"
          >
            Backend
          </label>
          <input
            className="p-2 w-6 h-6 mr-2 cursor-pointer bg-transparent"
            type="radio"
            id="choice3"
            name="tools"
            onChange={handleChange}
          />
          <label
            className="mr-5 font-extrabold text-sm cursor-pointer"
            htmlFor="choice3"
          >
            Devops
          </label>
          <input
            className="peer p-2 w-6 h-6 mr-2 cursor-pointer"
            type="radio"
            id="choice4"
            name="tools"
            onChange={handleChange}
          />
          <label
            className="mr-5 font-extrabold text-sm cursor-pointer"
            htmlFor="choice4"
          >
            Testing
          </label>
          <input
            className="p-2 w-6 h-6 mr-2 cursor-pointer bg-transparent"
            type="radio"
            id="choice5"
            name="tools"
            onChange={handleChange}
          />
          <label
            className="mr-5 font-extrabold text-sm cursor-pointer"
            htmlFor="choice5"
          >
            UX/UI
          </label>
          <input
            className="p-2 w-6 h-6 mr-2 cursor-pointer bg-transparent"
            type="radio"
            id="choice6"
            name="tools"
            onChange={handleChange}
          />
          <label
            className="mr-5 font-extrabold text-sm cursor-pointer"
            htmlFor="choice6"
          >
            Infrastructure
          </label>
          <input
            className="p-2 w-6 h-6 mr-2 cursor-pointer bg-transparent"
            type="radio"
            id="choice7"
            name="tools"
            onChange={handleChange}
          />
          <label
            className="mr-5 font-extrabold text-sm cursor-pointer"
            htmlFor="choice7"
          >
            Mobile
          </label>
        </form>
        <div className="grid grid-cols-12 gap-x-2 gap-y-2">
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50"
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/promotheusLogo.svg"
              alt="Promotheus Logo"
            />
            <p className="text-xs">Promotheus</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/lokiLogo.svg"
              alt="Loki Logo"
            />
            <p className="text-xs">Loki</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/bitbucketLogo.svg"
              alt="Bitbucket Logo"
            />
            <p className="text-xs">Bitbucket</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/gitlabLogo.svg"
              alt="Gitlab Logo"
            />
            <p className="text-xs">Gitlab</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice7" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/kotlinLogo.svg"
              alt="Kotlin Logo"
            />
            <p className="text-xs">Kotlin</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice7" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/androidLogo.svg"
              alt="Android Logo"
            />
            <p className="text-xs">Android</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice7" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/javaLogo.svg"
              alt="Java Logo"
            />
            <p className="text-xs">Java</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice6" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/azureLogo.svg"
              alt="Azure Logo"
            />
            <p className="text-xs">Azure</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice6" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/gcpLogo.svg"
              alt="GCP Logo"
            />
            <p className="text-xs">GCP</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice6" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/digitalOceanLogo.svg"
              alt="DigitalOcean Logo"
            />
            <p className="text-xs">DigitalOcean</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice6" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/awsLogo.svg"
              alt="AWS Logo"
            />
            <p className="text-xs">AWS</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice6" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/kubernetesLogo.svg"
              alt="Kubernetes Logo"
            />
            <p className="text-xs">Kubernetes</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/elkLogo.svg"
              alt="ELK Logo"
            />
            <p className="text-xs">ELK</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/grafanaLogo.svg"
              alt="Grafana Logo"
            />
            <p className="text-xs">Grafana</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/terraformLogo.svg"
              alt="Terraform Logo"
            />
            <p className="text-xs">Terraform</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice7" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/iosLogo.svg"
              alt="IOS Logo"
            />
            <p className="text-xs">IOS</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice7" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/swiftLogo.svg"
              alt="Swift Logo"
            />
            <p className="text-xs">Swift</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice7" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/flutterLogo.svg"
              alt="Flutter Logo"
            />
            <p className="text-xs">Flutter</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/nextJsLogo.svg"
              alt="Next.JS Logo"
            />
            <p className="text-xs">Next.JS</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/reactJsLogo.svg"
              alt="React.JS Logo"
            />
            <p className="text-xs">React.JS</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/javascriptLogo.svg"
              alt="Javascript Logo"
            />
            <p className="text-xs">Javascript</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/balsamicLogo.svg"
              alt="Balsamic Logo"
            />
            <p className="text-xs">Balsamic</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/invisionLogo.svg"
              alt="Invision Logo"
            />
            <p className="text-xs">Invision</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/figmaLogo.svg"
              alt="Figma Logo"
            />
            <p className="text-xs">Figma</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice3" || selectedTool === ""
                ? "bg-[#a8bfff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/dockerLogo.svg"
              alt="Docker Logo"
            />
            <p className="text-xs">Docker</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice2" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/postgreSqlLogo.svg"
              alt="PostgreSQL Logo"
            />
            <p className="text-xs">PostgreSQL</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice2" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/pythonLogo.svg"
              alt="Python Logo"
            />
            <p className="text-xs">Python</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice2" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/nodeJsLogo.svg"
              alt="Node.JS Logo"
            />
            <p className="text-xs">Node.JS</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice2" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/phpLogo.svg"
              alt="PHP Logo"
            />
            <p className="text-xs">PHP</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice2" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/goLogo.svg"
              alt="GO Logo"
            />
            <p className="text-xs">GO</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/antDesignLogo.svg"
              alt="Ant Design Logo"
            />
            <p className="text-xs">Ant Design</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/gatsbyJsLogo.png"
              alt="Gatsby.JS Logo"
            />
            <p className="text-xs">Gatsby.JS</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/vueJsLogo.svg"
              alt="Vue.JS Logo"
            />
            <p className="text-xs">Vue.JS</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/principleLogo.svg"
              alt="Principle Logo"
            />
            <p className="text-xs">Principle</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/sketchLogo.svg"
              alt="Sketch Logo"
            />
            <p className="text-xs">Sketch</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/adobeSuiteLogo.svg"
              alt="Adobe suite Logo"
            />
            <p className="text-xs">Adobe suite</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice4" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/youTrackLogo.svg"
              alt="YouTrack Logo"
            />
            <p className="text-xs">YouTrack</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice4" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/appiumLogo.svg"
              alt="Appium Logo"
            />
            <p className="text-xs">Appium</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice4" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/cypressLogo.svg"
              alt="Cypress Logo"
            />
            <p className="text-xs">Cypress</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice4" || selectedTool === ""
                ? "bg-[#dbe5ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/jmeterLogo.svg"
              alt="Jmeter Logo"
            />
            <p className="text-xs">Jmeter</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice2" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/mongoDbLogo.svg"
              alt="MongoDB Logo"
            />
            <p className="text-xs">MongoDB</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice2" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/cassandraLogo.svg"
              alt="Cassandra Logo"
            />
            <p className="text-xs">Cassandra</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/sassLogo.svg"
              alt="Sass Logo"
            />
            <p className="text-xs">Sass</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice1" || selectedTool === ""
                ? "bg-[#c6d6ff]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/materialUiLogo.svg"
              alt="Material UI Logo"
            />
            <p className="text-xs">Material UI</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/zeplinLogo.svg"
              alt="Zeplin Logo"
            />
            <p className="text-xs">Zeplin</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/illustratorLogo.svg"
              alt="Illustrator Logo"
            />
            <p className="text-xs">Illustrator</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/lottieLogo.svg"
              alt="Lottie Logo"
            />
            <p className="text-xs">Lottie</p>
          </div>
          <div
            className={`text-center rounded-md py-4 px-2 ${
              selectedTool === "choice5" || selectedTool === ""
                ? "bg-[#d1dde8]"
                : "bg-transparent opacity-50 "
            }`}
          >
            <img
              className="w-6 h-6 mb-4 mx-auto"
              src="/images/photoshopLogo.svg"
              alt="Photoshop Logo"
            />
            <p className="text-xs">Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
