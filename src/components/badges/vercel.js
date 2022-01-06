import React, { Component } from "react";
import "./vercel.css";

class VercelBadge extends Component {

    render() {
      return (
        <div className="badge">
            <a href="https://vercel.com/?utm_source=demonbolt&utm_campaign=oss">
                <img 
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                alt="Powered by Vercel"/>
                </a>
        </div>
      );
    }
  }
  
  export default VercelBadge;