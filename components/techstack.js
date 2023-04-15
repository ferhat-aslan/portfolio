function TechStack({ src, text }) {
  console.log(src)
  return (
    <div className="flex flex-col items-center justify-between gap-y-1">
      <img width={65} src={src} />
      <span className="w-full text-center">{text}</span>
    </div>
  )
}

export default TechStack
