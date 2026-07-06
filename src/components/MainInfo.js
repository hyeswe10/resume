import React from 'react';

const MainInfo = () => {
    return (
        <div id='main-info'>
            <div className='left'>
                <div className='skills'>
                    <h3>SKILLS</h3>
                    <div className='lang'>
                        <h4>Core-Skills</h4>
                        <div className='btn'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className='frame'>
                        <h4>Framework</h4>
                        <div className='btn'>
                            <p>React</p>
                            <p>GSAP</p>
                        </div>
                    </div>
                    <div className='tools'>
                        <h4>Tools</h4>
                        <div className='btn'>
                            <p>Git</p>
                            <p>Supabase</p>
                        </div>
                    </div>
                </div>
                <div className='education'>
                    <h3>EDUCATION</h3>
                    <div className='high'>
                        <span>2014.08 ~ 2017.05</span>
                        <p>Metro Delhi International School</p>
                    </div>
                    <div className='college'>
                        <span>2018.03 ~ 중퇴</span>
                        <p>한국외국어대학교 일본어통번역학과</p>
                    </div>
                    <div className='academy'>
                        <span>2025.03 ~ 2025.07</span>
                        <p>MBC컴퓨터아카데미</p>
                    </div>
                </div>
                <div className='self'>
                    <h3>SELF-STUDY</h3>
                    <div className='study'>
                        <li>Vue.js</li>
                        <li>TypeScript</li>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='about-me'>
                    <h3>ABOUT ME</h3>
                    <p>새로운 기술을 빠르게 익히고 끝까지 파고드는 <b>신입 프론트엔드 개발자</b>입니다. <br/>React 기반 프로젝트로 기본기를 다져왔고, 지금은 다룰 수 있는 도구의 폭을 넓히기 위해 Vue와 TypeScript를 공부하고 있습니다. <br/>변화하는 기술 흐름에 맞춰 스스로를 발전시키며, <b>팀이 믿고 맡길 수 있는 사람</b>이 되고자 합니다.</p>
                </div>
                <div className='team'>
                    <h3>TEAM PROJECTS</h3>
                    <div className='desc'>
                        <div className='left-line'></div>
                        <div className='right-desc'>
                            <div className='pro-1'>
                                <h4>Zero Flow <span>- 5인 팀 프로젝트</span></h4>
                                <p>지속 가능한 소비를 지향하는 친환경 제로웨이스트 제품 쇼핑몰</p>
                                <ul>
                                    <li>Git/GitHub 기반 형상 관리 및 협업 컨벤션을 주도</li>
                                    <li>상세페이지 디자인 시스템을 설계하고 컴포넌트 단위로 구현</li>
                                    <li>키링 상세페이지 UI를 직접 구현</li>
                                </ul>
                                <div className='tools'>
                                    <p className='title'>Tools</p>
                                    <p>PhotoShop</p>
                                    <p>Figma</p>
                                    <p>React</p>
                                    <p>GSAP</p>
                                    <p>Git/GitHub</p>
                                    <p>SCSS</p>
                                    <p>JSON</p>
                                </div>
                            </div>
                            <div className='pro-2'>
                                <h4>Dreamland Parking <span>- 5인 팀 프로젝트</span></h4>
                                <p>놀이공원 주차 운영을 체계적으로 관리하는 주차 관리 웹/앱 서비스</p>
                                <ul>
                                    <li>서비스 요구사항을 분석해 DB 테이블을 설계하고 SQL 기반으로 데이터 관리</li>
                                    <li>핵심 기능 전반의 API를 설계 및 구현</li>
                                    <li>예약 플로우차트와 와이어프레임을 기획해 화면 흐름을 설계</li>
                                    <li>로그인/회원가입, 아이디/비밀번호 찾기,  예약부터 결제까지의 페이지를 구현</li>
                                </ul>
                                <div className='tools'>
                                    <p className='title'>Tools</p>
                                    <p>React</p>
                                    <p>Supabase</p>
                                    <p>JSON</p>
                                    <p>SCSS</p>
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='study'>
                    <h3>STUDY PROJECT</h3>
                    <div className='desc'>
                        <div className='left-line'></div>
                        <div className='right-desc'>
                            <h4>경축 (경기도 축제) <span>- 5인 스터디 팀 프로젝트</span></h4>
                            <p>경기도에서 열리는 축제 정보를 한눈에 모아 보여주는 정보 제공 앱</p>
                            <ul>
                                <li>핵심 기능 전반의 API를 설계 및 구현</li>
                                <li>외부 API를 연동하고 정보 테이블을 설계해 축제 데이터를 관리</li>
                                <li>화면 흐름을 와이어프레임으로 기획</li>
                                <li>로그인/회원가입과 검색 기능을 구현</li>
                            </ul>
                            <div className='tools'>
                                <p className='title'>Tools</p>
                                <p>React</p>
                                <p>React Router</p>
                                <p>Supabase</p>
                                <p>JSON</p>
                                <p>SCSS</p>
                                <p>Figma</p>
                                <p>외부 API</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='improvement'>
                    <h3>IMPROVEMENT</h3>
                    <div className='pro-1'>
                        <div>
                            <span>문제</span>
                            <p></p>
                        </div>
                        <div>
                            <span>원인</span>
                            <p></p>
                        </div>
                        <div>
                            <span>해결</span>
                            <p></p>
                        </div>
                        <div>
                            <span>결과</span>
                            <p></p>
                        </div>
                    </div>
                    <div className='pro-2'>
                        <div>
                            <span>문제</span>
                            <p></p>
                        </div>
                        <div>
                            <span>원인</span>
                            <p></p>
                        </div>
                        <div>
                            <span>해결</span>
                            <p></p>
                        </div>
                        <div>
                            <span>결과</span>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;