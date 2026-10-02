"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { departments, experienceLevels, locations, roles } from "@/data/careers";
import { ArrowIcon } from "@/components/Icons";

export function CareersExplorer() {
  const [department, setDepartment] = useState("All departments");
  const [location, setLocation] = useState("All locations");
  const [experience, setExperience] = useState("All experience levels");
  const filtered = useMemo(() => roles.filter((role) =>
    (department === "All departments" || role.department === department)
    && (location === "All locations" || role.location === location)
    && (experience === "All experience levels" || role.experience === experience)), [department, location, experience]);
  const isFiltered = department !== "All departments" || location !== "All locations" || experience !== "All experience levels";
  function reset() { setDepartment("All departments"); setLocation("All locations"); setExperience("All experience levels"); }

  return (
    <section className="explorer careers-explorer" aria-labelledby="roles-title">
      <div className="explorer__selects explorer__selects--jobs">
        <div className="field-wrap"><label htmlFor="career-department">Department</label><select id="career-department" className="field" value={department} onChange={(event) => setDepartment(event.target.value)}><option>All departments</option>{departments.map((item) => <option key={item}>{item}</option>)}</select></div>
        <div className="field-wrap"><label htmlFor="career-location">Location</label><select id="career-location" className="field" value={location} onChange={(event) => setLocation(event.target.value)}><option>All locations</option>{locations.map((item) => <option key={item}>{item}</option>)}</select></div>
        <div className="field-wrap"><label htmlFor="career-experience">Experience</label><select id="career-experience" className="field" value={experience} onChange={(event) => setExperience(event.target.value)}><option>All experience levels</option>{experienceLevels.map((item) => <option key={item}>{item}</option>)}</select></div>
      </div>
      <div className="explorer__results-head" aria-live="polite" aria-atomic="true"><h2 id="roles-title">Illustrative roles <span>({filtered.length})</span></h2>{isFiltered ? <button className="text-button" type="button" onClick={reset}>Clear filters</button> : <p>Example listings only · no applications are open.</p>}</div>
      {filtered.length ? <div className="role-list">{filtered.map((role) => <Link href={`/careers/${role.slug}`} className="role-card" key={role.slug}>
        <span className="role-card__index">V / ROLE</span><span className="role-card__title"><strong>{role.title}</strong><small>{role.summary}</small></span>
        <span className="role-card__meta"><span>{role.department}</span><span>{role.location}</span><span>{role.experience}</span></span><span className="role-card__arrow" aria-hidden="true"><ArrowIcon /></span>
      </Link>)}</div> : <div className="empty-state" role="status"><span className="empty-state__mark" aria-hidden="true">0</span><h3>No roles match those filters.</h3><p>Clear the filters to see every fictional example.</p><button className="button button--secondary" type="button" onClick={reset}>Clear filters</button></div>}
    </section>
  );
}
