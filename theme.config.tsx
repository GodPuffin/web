import React from "react";

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      Made By Marcus Lee.
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  readMore: 'Read More →',
  // postFooter: null,
  darkMode: true,
  primaryHue: 296,
}