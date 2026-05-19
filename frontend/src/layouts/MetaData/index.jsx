import {Helmet} from 'react-helmet';

export default function MetaData({title}) {
   return (
      <Helmet>
         <title>{`Blog | ${title}`}</title>
      </Helmet>

   );
}