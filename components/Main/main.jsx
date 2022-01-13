import Link from "next/link"
import { useRouter } from "next/router"
import HomeCard from "."
import { homeCardApi } from "../../pages/api/HomeCardApi"
function Main() {

    return (
        <>
            <style jsx>
                {`  `}
            </style>
            <div className="main-container">
                {
                    homeCardApi.map(e =>
                        <HomeCard
                            key={Math.random()}
                            heading={e.heading}
                            subcontent={e.subcontent}
                            content={e.content}
                            buttonTitle={e.buttonTitle}
                            inputPlaceholder={e.inputPlaceholder}
                        >
                        </HomeCard>)
                }
            </div>
        </>

    )
}

export default Main


