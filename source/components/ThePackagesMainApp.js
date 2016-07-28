/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

/* todo

done

$( document ).ready( function() {
    $('#package2').hide();
});

done

$('#button_download_package2').click(function(){
    $(this).hide();
    $('#package2').show();
});
$('#button_submit_package2').click(function(event){
        $.get( "HandlerMailingList", $("#email_package2"),function(){
        window.location.href = "downloadCustomerBrochure.html";
    });
});

 */
module.exports  = React.createClass(
    {
        getInitialState: function ()
        {
            console.info("Initializing PackageMainApp");
            return {
                //style={{display:this.state.isDownloadButtonHidden}}
                isDownloadButtonHidden: "block",
                isSubmitButtonHidden: "none",
            };
        },
        handleClickDownload: function ()
        {
            console.info("handleClickDownload called");
            if (this.state.isDownloadButtonHidden == "block")
            {
                this.setState({isDownloadButtonHidden: "none"});
                this.setState({isSubmitButtonHidden: "block"});
            }

            //this.setState({isHeaderHidden: !this.state.isHeaderHidden});
        },
        handleClickSubmit: function ()
        {
            console.info("handleClickSubmit called");
            //this.setState({isHeaderHidden: !this.state.isHeaderHidden});
        },
        render: function()
        {
            console.info("rendering ThePackagesMainApp");
            return(
                	<section className="packages">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-3">
                                    <div className="package wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                        <div className="package-header blue-bg">
                                            <h3>Customer brochure</h3>
                                        </div>
                                        <div className="price-container blue-bg white-text">
                                            <div style={{"background-image": 'url("images/sdcard.png")',"background-repeat": 'no-repeat',"margin-left":'10px'}}>
                                                <br/>
                                                <h5>Version 1.8.6<br/>Release date<br/>2016 march 21</h5>
                                                <br/><br/><br/><br/><br/>
                                            </div>
                                        </div>
                                        <button id="button_download_package2" className="btn btn-primary custom-button-ttb blue-btn" style={{display:this.state.isDownloadButtonHidden}} onClick={this.handleClickDownload.bind(this)}>Download</button>
                                    <div id ="package2" className="pack-form" style={{display:this.state.isSubmitButtonHidden}}>
                                            <input type="hidden" name="usingAJAX" value="false" />
                                            <input type="text" id="email_package2" placeholder="Please enter email" className="form-control input-text-ttb input-box" style={{"margin-top": '10px',"border-style":'solid'}} name="email"></input>
                                            <button id="button_submit_package2" className="btn btn-primary custom-button-ttb red-btn" onClick={this.handleClickSubmit.bind(this)}>Download</button>
                                    </div>
                                    <script></script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            )
        }
    });
