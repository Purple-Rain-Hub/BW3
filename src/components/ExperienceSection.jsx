import { useSelector } from "react-redux";

const ExperienceSection = () => {
  const experience = useSelector((state) => {
    return state.experience;
  });

  return (
    <>
      <div className="p-3">
        <h5>Esperienza</h5>
        {experience.map((e) => {
          return (
            <div
              className="d-flex border-bottom border-1 mt-3 pb-2"
              key={e._id}
            >
              <img
                src={e.image ? e.image : "https://placecats.com/60/60"}
                style={{
                  width: "60px",
                  height: "60px",
                }}
              />
              <div className="ms-2">
                <h6 className="m-0">{e.role}</h6>
                <p className="m-0">{e.company}</p>
                <p className="m-0 fw-lighter">
                  Da <span>{e.startDate}</span> A <span>{e.endDate}</span>
                </p>
                <p className="m-0 fw-lighter">{e.area}</p>
                <p className="m-0">{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExperienceSection;
