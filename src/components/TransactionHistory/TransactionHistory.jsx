import PropTypes from 'prop-types';
import { Table, HeaderString, BodyString } from "./TransactionHistory.styled"

function upperFirstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <HeaderString>Type</HeaderString>
                    <HeaderString>Amount</HeaderString>
                    <HeaderString>Currency</HeaderString>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <BodyString>{upperFirstLetter(item.type)}</BodyString>
                        <BodyString>{item.amount}</BodyString>
                        <BodyString>{item.currency}</BodyString>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};