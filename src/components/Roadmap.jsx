import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Roadmap() {
  return (
    <div className="h-auto mx-auto">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="font-league font-bold text-6xl md:text-6xl xl:text-6xl text-white  tracking-normal mb-6">
          roadmap
        </h2>
        <p className="font-spacegrotesk my-6 text-xl sm:text-2xl leading-8 text-white">
          we've come a long way already and continue to build
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
          date="2023 - August"
          dateClassName="lg:text-white text-black font-arcade  uppercase    "
          iconStyle={{ background: "#fed5c0", color: "#fff" }}
          textClassName="text-black text-lg font-semibold "
          //   icon={roadmaprobot}
        >
          <h3 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-black vertical-timeline-element-title">
            launch and
          </h3>
          <h4 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-black vertical-timeline-element-subtitle">
            adoption 🔤
          </h4>
          <ul className="list-disc list-inside	">
            <li>stealth launch our token</li>
            <li>release our V1 Bot</li>
            <li>market the bot and grow the number of users</li>
            <li>updates to the bot</li>
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
          date="2023 - July"
          dateClassName="lg:text-white text-black font-arcade  uppercase   "
          iconStyle={{ background: "#fec0ca", color: "#fec0ca" }}
          textClassName="text-black text-lg font-semibold "
          //   icon={roadmaprobot}
        >
          <h3 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-black vertical-timeline-element-title">
            Updates and
          </h3>
          <h4 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-black vertical-timeline-element-subtitle">
            Community Building 🔤
          </h4>
          <ul className="list-disc list-inside	">
            <li>add leaderboards for bot users</li>
            <li>build new commands for call timeframes</li>
            <li>add alpha chats for top callers and token holders</li>
            <li>giveaways for top callers</li>
            <li>partnerships with communities and callers</li>
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
          date="2023 - August"
          dateClassName="lg:text-white text-black font-arcade  uppercase   "
          iconStyle={{ background: "#fec0e9", color: "#fff" }}
          textClassName="text-black text-lg font-semibold "
          //   icon={roadmaprobot}
        >
          <h3 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-black vertical-timeline-element-title">
            Monetize and
          </h3>
          <h4 className="md:text-4xl xl:text-7xl font-league text-2xl sm:text-2xl font-bold tracking-normal text-black vertical-timeline-element-subtitle">
            Give Back to Holders 🔤
          </h4>
          <ul className="list-disc list-inside	">
            <li>create revenue streams through new paid features</li>
            <li>pay to reset your call history</li>
            <li>advertisements under our bot messages</li>
            <li>revenue Share to give back to holders</li>
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
