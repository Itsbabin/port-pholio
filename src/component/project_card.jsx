export default function Card({project}) {
  return (
    <>
        <div className="project_card">
            <div className="project_image"></div>
            <div className="project_text">
                <div className="title">{project.title}</div>
                <div className="tag">{project.tag}</div>
                <div className="description">{project.description}</div>
            </div>
        </div>
    </>
  )
}
