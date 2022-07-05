import React from 'react'
import loreImg from '../../image/loreImg.png'

const Main = () => {
  return (
    <>
      <section className='loreSection'>
        <div className='container-fluid'>
          <div className="row">
            <div className="com-md-12">
              <div className='box'>
                <div className='row'>
                  <div className="col-md-6 col-lg-8">
                    <div className='row'>
                      <div className="col-6 col-sm-6 col-md-12">
                        <h2><span>B</span>orn in a society built on fear, poverty mindsets, and people with a crab bucket mentality</h2>
                      </div>
                      <div className="col-6 col-sm-6 col-md-12 d-block d-md-none">
                          <img src={loreImg} />
                      </div>
                      <div className="col-12 col-sm-12 col-md-12">
                        <p><span>Louis couldn't help but feel he didn't belong around those he grew up with.</span> He knew there was more to life than doing what was expected of him and he had the capabilities to do more than those around him. Young Loui would vocally express to his parents how much he wanted to see the world and do great things but every time he would show such enthusiasm Louie's parents shot down his dreams. It killed him to know that his own family didn’t support his ideas and aspirations, but it never stopped Loui from imagining the world in the palm of his hand. Louis didn't have too many friends, he was considered an oddball and would often get made fun of by the other kids in his class.</p>
                        <p><span>He did have one friend though, his name was arnold. Arnold was Loui's best friend ever.</span> They both fantasized about living their life to the fullest and doing what they were most passionate about. Many Summer nights were spent talking about plans, and dreams and making the most out of what they have to achieve their ultimate goals. On one special night, Loui and Arnold vowed to each other that they would never let each other give up on what they believed in. After that faithful night, they founded the roundtable in search of people who wanted to be their own kings, FFAP regardless of the world around them. Even as they grew older they never forgot how it felt to be a little king.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 d-none d-md-block">
                    <img src={loreImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main