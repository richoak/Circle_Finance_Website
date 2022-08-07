import React, { Fragment } from "react";
import HelperDetail from "./Helperdetail";

const AllHelpers = (props) => {
    console.log(props)
    return(
        <Fragment>
            <div className="row">
                <div className="col-md-4">
                <div class="form-group">
                        <label for="exampleFormControlSelect2">Sort By</label>
                        <select class="form-control" id="">
                        <option value="recommended">Recommended</option>
                        <option value="lowtohigh">Price (Lowest to Highest)</option>
                        <option value="lowtohigh">Price (Highest to Lowest)</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-8">
                {
                props.all_helpers.map((helper) => (
                    <HelperDetail
                    key={helper.id}
                    name={helper.name}
                    totalErrands={helper.totalErrand}
                    mobile={helper.mobile}
                    summary={helper.summary}
                    image={helper.image}
                    ratings={helper.ratings}
                    noofreviews={helper.noofreviews}
                    price={helper.price}
                    phone={helper.phone}
                    />
                ))
            }
                </div>
            </div>
       
        </Fragment>
    )
}

export default AllHelpers