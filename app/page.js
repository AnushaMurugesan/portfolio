"use client";

import { useEffect, useRef, useState } from "react";

const Arrow = () => <svg viewBox="0 0 24 24"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>;
const Mic = () => <svg viewBox="0 0 24 24"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-7 9a7 7 0 0 0 14 0M12 19v3m-4 0h8" /></svg>;

function VoiceRibbon() {
  const bars = [18,34,24,51,29,65,38,22,49,32,58,25,43,70,34,53,28,45,21,37,62,31,48,26,39,18];
  return <div className="voice-ribbon">{bars.map((h,i)=><i key={i} style={{"--h":`${h}px`,"--i":i}} />)}</div>;
}

function DataField() {
  const values=[32,48,40,68,55,83,73,96,61,88,77,93];
  return <div className="data-field">{values.map((h,i)=><i key={i} style={{"--height":`${h}%`,"--i":i}}><span>{String(i+1).padStart(2,"0")}</span></i>)}</div>;
}

function SkillMachine() {
  return <div className="skill-machine">
    <div className="machine-track" />
    <div className="machine-unit unit-a"><span>01 / EXPERIENCE</span><b>PRODUCT<br/>INTERFACE</b><small>REACT · NEXT · TYPESCRIPT</small></div>
    <div className="machine-unit unit-b"><span>02 / ENGINE</span><b>SAAS + DATA<br/>SYSTEMS</b><small>NODE · TRPC · PRISMA · SQL</small></div>
    <div className="machine-unit unit-c"><span>03 / INTELLIGENCE</span><b>VOICE AI<br/>AGENTS</b><small>VAPI · ELEVENLABS · RINGG</small></div>
  </div>;
}

function LogisticsFlow(){
  return <div className="logistics-flow"><div className="branch central"><span>HQ</span><b>CONTROL</b></div>{["BRANCH 01","BRANCH 02","BRANCH 03","INVENTORY"].map((name,i)=><div className={`branch branch-${i}`} key={name}><span>0{i+1}</span><b>{name}</b><i/></div>)}</div>;
}

function AchievementFlow(){
  return <div className="achievement-flow"><div><b>30%</b><span>FASTER LOADS</span><small>Code splitting · Lazy loading</small></div><i/><div><b>25%</b><span>MORE ENGAGEMENT</span><small>Intuitive interaction systems</small></div><i/><div><b>40%</b><span>FASTER DELIVERY</span><small>Reusable component architecture</small></div></div>;
}

export default function Home(){
  const journey=useRef(null);
  const stage=useRef(null);
  const [chapter,setChapter]=useState(0);
  const [menu,setMenu]=useState(false);

  useEffect(()=>{
    let frame;
    const update=()=>{
      const node=journey.current;
      const rect=node.getBoundingClientRect();
      const distance=node.offsetHeight-innerHeight;
      const p=Math.max(0,Math.min(1,-rect.top/Math.max(1,distance)));
      const exact=p*6;
      const next=Math.min(6,Math.floor(exact+.5));
      setChapter(next);
      stage.current?.style.setProperty("--p",p.toFixed(4));
      stage.current?.style.setProperty("--local",(exact-Math.floor(exact)).toFixed(4));
      stage.current?.style.setProperty("--camera",`${p*3100}px`);
      for(let i=0;i<7;i++){
        const distance=Math.abs(exact-i);
        const blend=Math.max(0,Math.min(1,1-distance/.86));
        const opacity=blend*blend*(3-2*blend);
        stage.current?.style.setProperty(`--o${i}`,opacity.toFixed(3));
        stage.current?.style.setProperty(`--s${i}`,(.88+opacity*.12).toFixed(3));
        const chapterNode=stage.current?.querySelectorAll(".chapter")[i];
        if(chapterNode) chapterNode.style.visibility=distance>.86?"hidden":"visible";
      }
      frame=null;
    };
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)};
    update();window.addEventListener("scroll",onScroll,{passive:true});window.addEventListener("resize",onScroll);
    return()=>{window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);if(frame)cancelAnimationFrame(frame)};
  },[]);

  return <main className="world">
    <nav className="nav shell"><a className="brand" href="#journey">A<span>/</span>M</a><div className={`nav-links ${menu?"open":""}`}><a href="#journey">Journey</a><a href="#exit">Contact</a></div><div className="chapter-readout"><span>0{chapter+1}</span><i/><b>{["ORIGIN","VOICE","DATA","SYSTEM","LOGISTICS","CRAFT","PATH"][chapter]}</b></div><button className="menu" onClick={()=>setMenu(!menu)}><span/><span/></button></nav>
    <section className="journey" id="journey" ref={journey}>
      <div className={`experience phase-${chapter}`} ref={stage}>
        <div className="grain"/><div className="vignette"/>
        <div className="progress"><i/><span>SCROLL TO MOVE THROUGH THE SYSTEM</span></div>
        <svg className="morph-network" viewBox="0 0 1000 440" aria-hidden="true">
          <g className="network-state network-origin"><path d="M70 300C210 300 205 105 370 105h150c160 0 155 195 315 195"/><path d="m795 270 40 30-40 30"/><path d="M370 105 445 45l75 60"/></g>
          <g className="network-state network-voice"><path d="M55 220h105l20-20 22 45 28-115 34 185 35-240 38 290 36-225 34 160 31-112 28 66 26-34 22 20h310"/><path className="network-soft" d="M55 165h760M55 275h760"/></g>
          <g className="network-state network-impact"><path d="M60 340C180 330 220 270 325 275s155-115 260-105 145-100 350-115"/><path className="network-soft" d="M60 370h875"/><path d="M325 275v95M585 170v200M820 95v275"/><circle cx="325" cy="275" r="16"/><circle cx="585" cy="170" r="16"/><circle cx="820" cy="95" r="16"/></g>
        </svg>
        <div className="camera">
          <div className="world-floor" />
          <div className="world-ceiling" />
          <div className="spine"><i/><i/><i/><i/></div>

          <section className="chapter chapter-origin">
            <div className="identity"><span>ANUSHA M</span><b>FULL STACK DEVELOPER · MADURAI, INDIA</b></div>
            <div className="word word-software">BUILD</div>
            <div className="word word-with">TO</div>
            <div className="word word-pulse">SCALE</div>
            <p>3+ years building enterprise SaaS, multi-tenant systems, and AI-powered products with measurable impact.</p>
            <div className="origin-aperture">
              <div className="aperture-fin fin-one"/><div className="aperture-fin fin-two"/><div className="aperture-fin fin-three"/>
              <div className="aperture-path"><i/><i/><i/><i/><i/></div>
              <span>ENTER / ANUSHA’S SYSTEM</span>
            </div>
          </section>

          <section className="chapter chapter-voice">
            <div className="chapter-tag">01 / VOICE AI SAAS · 2025—PRESENT</div>
            <h2>Conversations<br/>become <em>campaigns.</em></h2>
            <div className="voice-chamber">
              <div className="voice-route"><span>AGENT</span><i/><span>VOICE</span><i/><span>EVENT</span></div>
              <div className="chamber-frame front"><Mic/><span>VAPI · ELEVENLABS · RINGG AI</span><b>LIVE</b></div>
              <div className="chamber-frame back" />
              <VoiceRibbon/>
              <div className="transcript">Multi-tenant voice agents speaking with customers at scale.<span>RBAC / BATCH CALLS / WEBHOOK EVENTS</span></div>
            </div>
            <p className="chapter-note">Campaign creation · Contact lists · Call scripts · Live monitoring · Transcriptions</p>
          </section>

          <section className="chapter chapter-data">
            <div className="chapter-tag">02 / ENTERPRISE MDM · 2024—2025</div>
            <h2>Any schema.<br/><em>One source.</em></h2>
            <DataField/>
            <div className="data-route"><span>CSV</span><i/><span>PROFILE</span><i/><span>SCHEMA</span><i/><span>APPROVE</span><i/><span>API</span></div>
            <div className="data-reading"><span>UPSTREAM SOURCES</span><b>3×</b><small>CSV / XLSX / EXTERNAL DATABASE</small></div>
            <p className="chapter-note">Dynamic schemas · Multi-level approvals · API keys · Cron push connectors</p>
          </section>

          <section className="chapter chapter-system">
            <div className="chapter-tag">03 / 3+ YEARS · 4+ PRODUCTION APPS</div>
            <h2>Every layer.<br/><em>Production ready.</em></h2>
            <SkillMachine/>
            <div className="system-stack">30% FASTER LOADS · 25% HIGHER ENGAGEMENT · 40% DELIVERY EFFICIENCY</div>
            <div className="career-line"><span>2023</span><b>BYTECOMPASS</b><i/><span>2024—NOW</span><b>ANALYTICS AURA</b></div>
          </section>

          <section className="chapter chapter-logistics">
            <div className="chapter-tag">04 / ATVARA · HOTEL LOGISTICS · 2023</div>
            <h2>Every branch.<br/><em>One operation.</em></h2>
            <LogisticsFlow/>
            <p className="chapter-note">Role-based access · Real-time inventory · Dynamic staff forms · Branch configuration</p>
          </section>

          <section className="chapter chapter-craft">
            <div className="chapter-tag">05 / PERFORMANCE + PRODUCT CRAFT</div>
            <h2>Measured in<br/><em>real outcomes.</em></h2>
            <AchievementFlow/>
            <p className="chapter-note">Custom animation systems · Zero third-party motion libraries · Pixel-perfect responsive behavior</p>
          </section>

          <section className="chapter chapter-path">
            <div className="chapter-tag">06 / THE PATH SO FAR</div>
            <h2>Built by learning.<br/><em>Driven by impact.</em></h2>
            <div className="path-flow"><div><span>2020—2023</span><b>B.Sc. Information Technology</b><small>Lady Doak College · CGPA 8.0</small></div><i/><div><span>2023</span><b>Junior Frontend Developer</b><small>ByteCompass · React + Next.js</small></div><i/><div><span>2024—NOW</span><b>Junior Programmer Analyst</b><small>Analytics Aura · SaaS + AI + Data</small></div></div>
            <div className="tool-cloud">CURSOR · CLAUDE CODE · WINDSURF · MCP · FIGMA · GIT · JEST</div>
          </section>
        </div>
      </div>
    </section>

    <section className="exit" id="exit"><div className="exit-lines">{Array.from({length:12},(_,i)=><i key={i}/>)}</div><div className="exit-copy"><span>AVAILABLE FOR FULL STACK OPPORTUNITIES</span><h2>Let’s build<br/>what’s <em>next.</em></h2><a href="mailto:anushaa102002@gmail.com">ANUSHAA102002@GMAIL.COM <Arrow/></a></div><footer><div><a href="https://anusha-murugesan.vercel.app">CURRENT PORTFOLIO</a></div><span>MADURAI, INDIA · OPEN TO OPPORTUNITIES</span><span>© 2026 ANUSHA M</span></footer></section>
  </main>;
}
