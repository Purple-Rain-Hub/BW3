const ExperienceSection = () => {
  return (
    <div className="p-3">
      <h5>Esperienza</h5>
      <div className="d-flex border-bottom border-1 mt-3 pb-2">
        <img
          src="https://placecats.com/60/60"
          alt="QUA CI VA FOTO DINAMICA"
          height={"100%"}
        />
        <div className="ms-2">
          <h6 className="m-0">*role* qui</h6>
          <p className="m-0">*company* qui</p>
          <p className="m-0 fw-lighter">
            Da <span>*startDate* qui</span> A <span>*endDate* qui</span>
          </p>
          <p className="m-0 fw-lighter">*area* qui</p>
          <p className="m-0">*description* qui</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
