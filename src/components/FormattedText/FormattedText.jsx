import React from 'react';

const FormattedText = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default FormattedText;
