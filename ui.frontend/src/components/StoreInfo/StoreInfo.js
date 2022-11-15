import React from 'react';
import "./StoreInfo.css"

const StoreInfo = (props) => {
    const isMember = props.isMember;
    if (isMember) {
        return (
            <div className="store-info-selector">
                <div className="store-info-selector_selector">
                    <span className="store-info-selector_selector_store-name">
                        Connor’s Hardware & Rental, E. Westonhouse Rd
                    </span>
                    <svg width="8" height="9.5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.06 0.0300007L4 3.08333L0.94 0.0300007L0 0.970001L4 4.97L8 0.970001L7.06 0.0300007Z"
                              fill="#303133"/>
                    </svg>
                </div>
                <div className="store-info-selector_info">
                    <span className="store-info-selector_info_tagline">
                        Do it Best member store since 1999
                    </span>
                    <span>&#183;</span>
                    <span className="store-info-selector_info_closing-time">
                        Open until 7PM
                    </span>
                </div>
            </div>
        )
    }
    return (
        <div className="store-info-selector">
            <div className="store-info-selector_info">
                <span className="store-info-selector_info_tagline">
                    You're shopping
                </span>
                <span>&#183;</span>
                <span className="store-info-selector_info_closing-time">
                    Open until 8PM
                </span>
            </div>
            <div className="store-info-selector_selector">
                <span className="store-info-selector_selector_store-name">
                    Andersen Hardware & Supply
                </span>
                <svg width="8" height="9.5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.06 0.0300007L4 3.08333L0.94 0.0300007L0 0.970001L4 4.97L8 0.970001L7.06 0.0300007Z"
                          fill="#303133"/>
                </svg>
            </div>
        </div>
    )
}

export default StoreInfo;