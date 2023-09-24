import React from 'react';
import '../CSS/learn.css'
import esg_image from '../esg_image.jpg'
import esg1 from '../ESG-1.jpg';
import esg2 from '../ESG-2.png';
import esg3 from '../ESG-3.jpg'


const Learn = () => {
  return (
    <div className='container'>
      <div className='container-main'>
        <div className='container-data d-flex flex-md-row flex-column justify-content-space-around'>
          <div className='main-content order-md-1 order-2 mt-md-5 mt-sm-3'>
            <p className='main-head'>ESG Investing and Anlysis</p>
            <p className='main-body-def'>ESG stands for Environmental, Social, and Governance, 
              and it represents a set of criteria used by investors to evaluate and screen potential 
              investments based on non-financial factors. ESG factors are used to assess the sustainability and 
              ethical impact of an investment, in addition to its financial potential.
              ESG analysis has become an increasingly important part of the investment process. 
              For investment professionals, a key motivation in the practice of considering environmental, 
              social, and governance (ESG) issues as part of their financial analysis is to gain a fuller 
              understanding of the companies in which they invest.</p>
          </div>
          <img className='image-fluid w-50 h-50 w-sm-100 order-md-2 order-1' src={esg_image} alt="Loading..."/>
        </div>
      </div>
      <div className='container'>
        <div className='container-desc'>
          <div className='container-one'>
            <p className='body-head'>What is ESG Investing?</p>
            <p className='body-def'>Environmental, social, and governance (ESG) investing refers to a set of standards for a company's
               behavior used by socially conscious investors to screen potential investments.
              Environmental criteria consider how a company safeguards the environment, 
              including corporate policies addressing climate change. Social 
              criteria examine how it manages relationships with employees, suppliers, customers, 
              and the communities where it operates. Governance deals with a company's leadership,
               executive pay, audits, internal controls, and shareholder rights.
               ESG investing can also help portfolios avoid holding companies engaged in risky or unethical practices.
              The rapid growth of ESG investment funds in recent years has led to claims that companies have been 
              insincere or misleading in touting their ESG accomplishments.
              Adopting ESG principles means that corporate strategy focuses on the three pillars of the environment,
               social, and governance. This means taking measures to lower pollution, CO2 output, and reduce waste. 
               It also means having a diverse and inclusive workforce, at the entry-level and all the way up to the 
               board of directors. ESG may be costly and time-consuming to undertake, but can also be rewarding into 
               the future for those that carry it through.</p>
          </div>
          <div className='container-two mt-5'>
            <p className='body-head'>How ESG Investing works?</p>
            <p className='body-def'>Brokerage firms and mutual fund companies have started 
            offering exchange-traded funds (ETFs) and other financial products that follow ESG investing strategies. 
            Robo-advisors including Betterment and Wealthfront have promoted these ESG-themed offerings to younger investors.
            ESG investors are also increasingly informing the investment choices of large institutional investors such as 
            public pension funds. According to an industry report from US SIF Foundation, investors held $17.1 trillion in 
            assets chosen according to ESG principles in 2020, up from $12 trillion just two years earlier.
            ESG-specific mutual funds and ETFs also reached a record $400 billion in AUM in 2021, 
            up 33% from the year before - and are expected to continue to grow rapidly in the coming years.
            ESG investing is sometimes referred to as sustainable investing, responsible investing, 
            impact investing, or socially responsible investing (SRI). To assess a company based on ESG criteria, 
            investors look at a broad range of behaviors and policies.</p>
          </div>
          <div className='container-three mt-5'>
            <p className='body-head'>ESG Criteria</p>
            <p className='body-def'>ESG investing focuses on companies that follow positive environmental, 
            social, and governance principles. Today, investors are increasingly eager to align their 
            portfolios with ESG-related companies and fund providers, making it an exciting area of growth 
            that also has positive effects on society and the environment.Investment firms following ESG investing often set their own priorities. 
            The criteria are set by analysts who identify the relevant issues facing specific sectors, 
            industries, and companies.
            </p>
          </div>
          </div>
      </div>
      <div className='container-cards'>
          <div className='copntainer-four mt-5'>
            <p className='body-head'>Key ESG Factors</p>
            <p className='body-def'>There is no definitive taxonomy of ESG factors. ESG factors are often interlinked, 
            and it can be challenging to classify an ESG issue as only an environmental, social, or governance issue, 
            as shown in the example below.These ESG factors can often be measured (e.g., what the employee turnover for a company is),
            but it can be difficult to assign them a monetary value (e.g., what the cost of employee turnover for a company is).
            </p>
          </div>
        <div className="row mt-5">
          <div className="col-xl-4 col-lg-6 col-md-6  mb-3 ">
            <div className="card">
              <img src={esg1} className="image-fluid card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Environmental</h5>
                <p className="card-text">
                  <ul>
                    <li>Climate change and carbon emissions</li>
                    <li>Air and water pollution</li>
                    <li>Biodiversity</li>     
                    <li>Deforestation</li>
                    <li>Energy efficiency</li>
                    <li>Waste management</li>
                    <li>Water scarcity</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6  mb-3 ">
            <div className="card">
            <img src={esg2} className="image-fluid card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Social</h5>
                <p className="card-text">
                  <ul>
                    <li>Customer satisfaction</li>
                    <li>Data protection and privacy</li>
                    <li>Gender and diversity</li>
                    <li>Employee engagement</li>
                    <li>Community relations</li>
                    <li>Human rights</li>
                    <li>Labor standards</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6  mb-3 ">
            <div className="card">
            <img src={esg3} className="image-fluid card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Governance</h5>
                <p className="card-text">
                  <ul>
                    <li>Board composition</li>
                    <li>Audit committee structure</li>
                    <li>Bribery and corruption</li>
                    <li>Executive compensation</li>
                    <li>Lobbying</li>
                    <li>Political contributions</li>
                    <li>Whistleblower schemes</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Learn
