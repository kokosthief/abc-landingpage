import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Roadmap() {
  return (
    <div className="h-auto sm:mx-auto -mt-20 mb-32 -mx-2">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h1 className=" font-league font-bold text-white pt-16 text-6xl xs:mt-16 sm:text-8xl  md:text-8xl xl:text-9xl  ">
          <span className="text-[white] ">Roadmap</span>
        </h1>

        <p className="font-spacegrotesk my-6 text-xl sm:text-2xl leading-8 text-white">
          We've come a long way already and continue to build.
        </p>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="mb-12 vertical-timeline-element--work "
          contentArrowStyle={{
            borderRight: "7px solid  #fed5c0  ",
          }}
          contentStyle={{
            background: "#fed5c0",
            borderRadius: "25px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
          iconStyle={{ background: "#fed5c0", color: "#fff" }}
          textClassName="text-[#0a0a0a] text-lg font-semibold "
          //   icon={roadmaprobot}
        >
          <h3 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-[#0a0a0a] vertical-timeline-element-title">
            Launch and
          </h3>
          <h4 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-[#0a0a0a] vertical-timeline-element-subtitle">
            Adoption
          </h4>
          <ul className="list-disc list-inside	">
            <li>Stealth Launch ABC Token *</li>
            <li>Release AlphaBot Base Utility *</li>
            <li>Add AlphaBot to Groups and Spread Adoption</li>
            <li>Run Global Tournaments and Competitions</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="mb-12 vertical-timeline-element--work   "
          contentArrowStyle={{
            borderRight: "7px solid  #fec0ca  ",
          }}
          contentStyle={{
            background: "#fec0ca",
            borderRadius: "25px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
          iconStyle={{ background: "#fec0ca", color: "#fec0ca" }}
          textClassName="text-[#0a0a0a] text-lg font-semibold "
          //   icon={roadmaprobot}
        >
          <h3 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-[#0a0a0a] vertical-timeline-element-title">
            Bot Utility
          </h3>
          <h4 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-[#0a0a0a] vertical-timeline-element-subtitle">
            Updates
          </h4>
          <ul className="list-disc list-inside	">
            <li>Stealth Launch ABC Token *</li>
            <li>Release AlphaBot Base Utility *</li>
            <li>Add AlphaBot to Groups and Spread Adoption</li>
            <li>Run Global Tournaments and Competitions</li>
            <li>Leaderboards and Rankings*</li>
            <li>ABC Trending*</li>
            <li>Integrate With Discord*</li>
            <li>Free Caller Subscriptions for Holders*</li>
            <li>Paid Caller Subscriptions</li>
            <li>Group Specific Commands</li>
            <li>Group Leaderboards</li>
            <li>Meme/Utility Calls</li>
            <li>Anti-Calls</li>
            <li>Integrated Competition Bot</li>
            <li>Custom Security Filtered Call</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="mb-12 vertical-timeline-element--work   "
          contentArrowStyle={{
            borderRight: "7px solid  #fec0e9  ",
          }}
          contentStyle={{
            background: "#fec0e9",
            borderRadius: "25px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
          iconStyle={{ background: "#fec0e9", color: "#fff" }}
          textClassName="text-[#0a0a0a] text-lg font-semibold "
          //   icon={roadmaprobot}
        >
          <h3 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-[#0a0a0a] vertical-timeline-element-title">
            Project
          </h3>
          <h4 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-[#0a0a0a] vertical-timeline-element-subtitle">
            Updates
          </h4>
          <ul className="list-disc list-inside	">
            <li>Rebranding*</li>
            <li>New Website*</li>
            <li>Portal for Claiming Subscription Revenue</li>
            <li>RevShare</li>
            <li>Dashboard</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="mb-12 vertical-timeline-element--work   "
          contentArrowStyle={{
            borderRight: "7px solid  #fec0e9  ",
          }}
          contentStyle={{
            background: "#fec0e9",
            borderRadius: "25px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
          iconStyle={{ background: "#fec0e9", color: "#fff" }}
          textClassName="text-[#0a0a0a] text-lg font-semibold "
          //   icon={roadmaprobot}
        >
          <h3 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-[#0a0a0a] vertical-timeline-element-title">
            Partnerships
          </h3>
          <ul className="list-disc list-inside	">
            <li>
              Partner with other projects to add “Call On Abc” to their projects
            </li>
            <li>
              Partnership with scanners to provide security info to our calls
            </li>
            <li>
              Partnership with snipers to set up auto buys and sells on calls
            </li>
            <li>RevShare</li>
            <li>Dashboard</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "black", color: "#fff" }}
          //   icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}
