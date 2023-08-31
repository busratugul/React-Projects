function Course({id,title,content,price,buyOneCourse}) {

  return (
  <div>
    <div className="card">
      <h4 className="cardTitle">{title}</h4>
      <p className="content">{content}</p>
    <button className="buyBtn" onClick={() => {
      buyOneCourse(id)
    }}>BUY {price}</button>
    </div>
  </div>
  )
}

export default Course