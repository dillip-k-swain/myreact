import React from "react";
import Tesla from '../../images/Tesla.jpg'

class Dashboard extends React.Component {
    render() {
        return(
            <div className="tabBody">
                <div className="tabHeader">
                    <button type="button" class="btn btn-outline-info float-right">Top up</button>
                    <span className="pointSpan float-right">Wallet Balance: 0.00 $</span>
                    <span className="pointSpan float-right">Points: 0</span>
                </div>
                <div class="firstRow">
                    <div class="float-right viewLink"><a href="javascript:void(0);">View Suggested</a></div>
                    <div className="cardList">
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <small class="date">20 Nov 2020</small>
                                <h5 class="card-title">Artwork Personalization at Netflix</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <strong class="writer">By Sujendra Kumar</strong>
                                <div class="bottomIcons">
                                    <span><i class="far fa-thumbs-up"></i> 120</span>
                                    <span class="ml-2"><i class="far fa-caret-square-up"></i> 50</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <small class="date">20 Nov 2020</small>
                                <h5 class="card-title">Artwork Personalization at Netflix</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <strong class="writer">By Sujendra Kumar</strong>
                                <div class="bottomIcons">
                                    <span><i class="far fa-thumbs-up"></i> 120</span>
                                    <span class="ml-2"><i class="far fa-caret-square-up"></i> 50</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <small class="date">20 Nov 2020</small>
                                <h5 class="card-title">Artwork Personalization at Netflix</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <strong class="writer">By Sujendra Kumar</strong>
                                <div class="bottomIcons">
                                    <span><i class="far fa-thumbs-up"></i> 120</span>
                                    <span class="ml-2"><i class="far fa-caret-square-up"></i> 50</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <small class="date">20 Nov 2020</small>
                                <h5 class="card-title">Artwork Personalization at Netflix</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <strong class="writer">By Sujendra Kumar</strong>
                                <div class="bottomIcons">
                                    <span><i class="far fa-thumbs-up"></i> 120</span>
                                    <span class="ml-2"><i class="far fa-caret-square-up"></i> 50</span>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <small class="date">20 Nov 2020</small>
                                <h5 class="card-title">Artwork Personalization at Netflix</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <strong class="writer">By Sujendra Kumar</strong>
                                <div class="bottomIcons">
                                    <span><i class="far fa-thumbs-up"></i> 120</span>
                                    <span class="ml-2"><i class="far fa-caret-square-up"></i> 50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="secondRow">
                    <div class="podcastHeader">
                        <div class="float-left title">
                            Suggested PodCasts
                        </div>
                        <div class="float-right viewLink">
                            <a href="javascript:void(0);">View Suggested</a>
                        </div>
                    </div>
                    <div className="cardList podcastBody">
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Smarter Markets</h5>
                                <small class="date">Abax Technologies INC</small>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Smarter Markets</h5>
                                <small class="date">Abax Technologies INC</small>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Smarter Markets</h5>
                                <small class="date">Abax Technologies INC</small>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Smarter Markets</h5>
                                <small class="date">Abax Technologies INC</small>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={Tesla} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Smarter Markets</h5>
                                <small class="date">Abax Technologies INC</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Dashboard;