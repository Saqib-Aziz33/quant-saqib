import { useEffect } from "react"
import NewsHero from "../components/elements/NewsHero"
import NewsTabs from "../components/elements/NewsTabs"

function News() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NewsHero />
      <NewsTabs />
    </>
  )
}
export default News