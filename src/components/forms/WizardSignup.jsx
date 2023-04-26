import React from 'react';
import PropTypes from "prop-types";
import {Form} from "react-final-form";
import {useNavigate} from "react-router-dom";

const WizardSignup = (props) => {
const navigate = useNavigate();
    WizardSignup.Page = ({children}) => children;

    const [page, setPage] = React.useState(0);
    const [values, setValues] = React.useState(props.initialValues || {});

    const next = (values) => {
        setPage(Math.min(page + 1, props.children.length - 1));
        setValues(values);
    }

    const previous = () => {
        setPage(Math.max(page - 1, 0));
    }

    const validate = (values) => {
        const activePage = React.Children.toArray(props.children)[page];
        return activePage.props.validate ? activePage.props.validate(values) : {};
    }

    const handleSubmit = (values) => {
        const {children, onSubmit} = props;
        const isLastPage = page === React.Children.count(children) - 1;
        if (isLastPage) {
            return onSubmit(values), setTimeout(()=>{navigate('/login')},2000) ;
        } else {
            next(values);
        }
    }

    const activePage = React.Children.toArray(props.children)[page];
    const isLastPage = page === React.Children.count(props.children) - 1;

    return (
        <Form
            initialValues={values}
            validate={validate}
            onSubmit={handleSubmit}
            render={({handleSubmit, submitting, values}) => (
                <form onSubmit={handleSubmit}>
                    {activePage}
                    <div className="buttons">
                        {page > 0 && (
                            <button type="button" className="previous" onClick={previous}>
                                « Previous
                            </button>
                        )}
                        {!isLastPage && (
                            <button type="submit" className="next">
                                Next »
                            </button>
                        )}
                        {isLastPage && (
                            <button type="submit" className="submit">
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            )}
        />
    );
}

export default WizardSignup;

WizardSignup.propTypes = {
    onSubmit: PropTypes.func.isRequired
}