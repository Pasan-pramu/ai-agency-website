"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * Team member tabs — the third Bootstrap-JS replacement (AGENTS.md rule 10).
 * Source: about.html:412-544. Not named in this step's brief, but the page
 * cannot be converted without it: `.tab-content>.tab-pane{display:none}` means
 * only #team_two would ever render and the other two members would be
 * unreachable.
 *
 * The markup is non-standard, exactly as the Addendum records:
 * `data-bs-toggle="tab"` sits on bare <div>s inside <li>s — no .nav-link, no
 * role="tab", no role="tablist". It works because Bootstrap 5.3's Tab child
 * selector includes [data-bs-toggle="tab"] and its parent lookup is
 * closest('.list-group, .nav, [role="tablist"]'), which finds ul.nav.nav-tabs.
 *
 * Bootstrap injects accessibility attributes at construction time, which under
 * the data-api is the first click. `interacted` reproduces that, so the server
 * HTML stays byte-identical to the source and the attributes appear only after
 * the user touches the tabs:
 *   ul.nav-tabs   -> role="tablist"
 *   each trigger  -> role="tab", aria-selected, tabindex="-1" when inactive
 *   each pane     -> role="tabpanel"
 * (_getOuterElement returns the trigger itself here because the <li> has no
 * .nav-item class, so no role="presentation" is added to the <li>.)
 *
 * Activation order, from Tab._activate / Tab._deactivate:
 *   outgoing: `active` comes off the trigger and the pane immediately; `show`
 *             comes off the pane after the .fade transition.
 *   incoming: `active` goes on immediately (that is what makes it display:block,
 *             still at opacity 0); `show` follows after the transition, fading
 *             it in.
 * Duration is read from the bundled bootstrap.min.css: `.fade{transition:
 * opacity .15s linear}` = 150ms, with `.fade:not(.show){opacity:0}` and
 * `.tab-content>.tab-pane{display:none}` / `.tab-content>.active{display:block}`.
 *
 * `active` on the trigger is load-bearing for style.css:5402
 * (.orbia-team_one .team-thumb-item.active).
 */

const FADE_MS = 150; // .fade -> transition: opacity .15s linear

export type TabMember = {
  id: string; // "team_one"
  thumb: number;
  name: string;
  image: number;
  active?: boolean;
};

/* `panes` is an array of already-rendered server elements aligned with
   `members` by index. A render prop cannot cross the server/client boundary —
   functions are not serializable in the RSC payload — but elements are, so the
   pane markup stays server rendered and this component only owns the state. */
export default function TeamTabs({
  members,
  panes,
}: {
  members: TabMember[];
  panes: ReactNode[];
}) {
  const initial = members.find((m) => m.active)?.id ?? members[0].id;
  const [activeId, setActiveId] = useState(initial);
  const [shownId, setShownId] = useState(initial);
  const [interacted, setInteracted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onSelect = (id: string) => {
    if (id === activeId) return; // Bootstrap: clicking the active tab is a no-op
    setInteracted(true);
    clearTimeout(timer.current);
    setActiveId(id);
    // `show` moves one transition later than `active`, on both panes.
    timer.current = setTimeout(() => setShownId(id), FADE_MS);
  };

  const paneClass = (id: string) =>
    `tab-pane fade${shownId === id ? " show" : ""}${activeId === id ? " active" : ""}`;

  return (
    <>
      <div className="col-xl-4 col-lg-12">
        {/* Tabs */}
        <ul
          className="nav nav-tabs"
          {...(interacted ? { role: "tablist" } : {})}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {members.map((m) => {
            const isActive = activeId === m.id;
            return (
              <li key={m.id}>
                {/* Team Thumb Item */}
                <div
                  className={`team-thumb-item mb-30${isActive ? " active" : ""}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${m.id}`}
                  onClick={() => onSelect(m.id)}
                  {...(interacted
                    ? {
                        role: "tab",
                        "aria-selected": isActive,
                        ...(isActive ? {} : { tabIndex: -1 }),
                      }
                    : {})}
                >
                  <div className="thumb">
                    <img
                      src={`/assets/images/home-one/team/team-thumb${m.thumb}.jpg`}
                      alt="team thumbnail"
                    />
                  </div>
                  <div className="content">
                    <h5>{m.name}</h5>
                    <span className="position">President of Sales</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-xl-8 col-lg-12">
        {/* Tab Content */}
        <div className="tab-content">
          {members.map((m, i) => (
            <div
              className={paneClass(m.id)}
              id={m.id}
              key={m.id}
              {...(interacted ? { role: "tabpanel" } : {})}
            >
              {panes[i]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
