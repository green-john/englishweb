import React from "react"

import Layout from "../../components/Layout"
import ValueProp from "../../components/ValueProp"
import ProductBenefits from "../../components/ProductBenefits"
import ProductFeatures from "../../components/ProductFeatures"
import CallToAction from "../../components/CallToAction"
import HeroImg from "../../components/HeroImg"
import Seo from "../../components/Seo"

const IndexPage = ({params}) => {
    const {lang} = params;
    return (
      <Layout lang={lang}>
          <Seo title="English Web"/>
          <HeroImg/>
          <ValueProp lang={lang}/>
          <ProductBenefits lang={lang}/>
          <ProductFeatures lang={lang}/>
          <CallToAction lang={lang}/>
      </Layout>
    )
}

export default IndexPage
