
import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <>
            <ins class="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-4206059090363101"
                    data-ad-slot="9220517382"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </>
    )
  }
}