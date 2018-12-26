import {
    createStackNavigator,
} from 'react-navigation';
import HomeContainer from '../containers/home/home.container'
import CashInContainer from '../containers/cashin/cashin.container'
import CashInWebContainer from '../containers/cashin/cashin-web.container'
import CashOutContainer from '../containers/cashout/cashout.container'
import LoanContainer from '../containers/loan/loan.container'
import MenuContainer from '../containers/home/menu.container'
import AccountTaks from '../containers/account-info/account-taks.container'
import AccountInfoContainer from '../containers/account-info/account-info.container'
import AccountInfoWorkContainer from '../containers/account-info/acc-info-work.container'
import AccountContactContainer from '../containers/account-info/account-contact.container'
import AccountChannelContainer from '../containers/account-info/account-channel.container'
import AccountDocumentContainer from '../containers/account-info/account-doc.container'
import AccountUpgradeContainer from '../containers/account-info/acc-upgrade.container'
import ConsultationContainer from '../containers/consultation/consultation.container'
import ManageLoanContainer from '../containers/loan/manage-loan.container'
import LoanDetailContainer from '../containers/loan/loan-detail.container'
import ReferalContainer from '../containers/referal/referal.container'
import ReferalConditionContainer from '../containers/referal/referal-condition.container'
import ReferalShareContainer from '../containers/referal/referal-share.container'
import NotifyDetailContainer from '../containers/notify/notify-detail.container'
import ATMContainer from '../containers/atm/atm.container'
import ATMWebContainer from '../containers/atm/atm-web.container'
import InsuranceContainer from '../containers/insurance/insurance.container'
import LandContainer from '../containers/land/land.container'
import CreditContainer from '../containers/atm/credit.container'
import OtoContainer from '../containers/oto/oto.container'
import ShopContainer from '../containers/shop/shop.container'
import HistoryContainer from '../containers/history/history-container'

import HelperContainer from '../containers/helper/helper-v2.container'
import HelperDetailContainer from '../containers/helper/helper-detail.container'
import HelperResultContainer from '../containers/helper/helper-result.container'
import HelperMapContainer from '../containers/helper/helper-map.container'

import StockExchangeContainer from '../containers/stockexchange/stockexchange-v2.container'
import ResultStockExchangeContainer from '../containers/stockexchange/result-stockexchange.container'
import StockExchangeDetailContainer from '../containers/stockexchange/stockexchange-detail.container'

import PageSuccess from '../containers/exception/success.container'

const TabHomeNavigator = createStackNavigator(
    {
        HomeDefault: {
            screen: HomeContainer,
            navigationOptions: { header: null }
        },
        CashIn: {
            screen: CashInContainer,
            navigationOptions: { header: null }
        },
        CashInWeb: {
            screen: CashInWebContainer,
            navigationOptions: { header: null }
        },
        CashOut: {
            screen: CashOutContainer,
            navigationOptions: { header: null }
        },
        Loan: {
            screen: LoanContainer,
            navigationOptions: { header: null }
        },
        Menu: {
            screen: MenuContainer,
            navigationOptions: { header: null }
        },
        Referal: {
            screen: ReferalContainer,
            navigationOptions: { header: null }
        },
        ReferalCondition: {
            screen: ReferalConditionContainer,
            navigationOptions: { header: null }
        },
        ReferalShare: {
            screen: ReferalShareContainer,
            navigationOptions: { header: null }
        },
        NotifyDetail: {
            screen: NotifyDetailContainer,
            navigationOptions: { header: null }
        },
        ATMContainer: {
            screen: ATMContainer,
            navigationOptions: { header: null }
        },
        ATMWebContainer: {
            screen: ATMWebContainer,
            navigationOptions: { header: null }
        },
        InsuranceContainer: {
            screen: InsuranceContainer,
            navigationOptions: { header: null }
        },
        LandContainer: {
            screen: LandContainer,
            navigationOptions: { header: null }
        },
        CreditContainer: {
            screen: CreditContainer,
            navigationOptions: { header: null }
        },
        Oto: {
            screen: OtoContainer,
            navigationOptions: { header: null }
        },
        Shop: {
            screen: ShopContainer,
            navigationOptions: { header: null }
        },

        // Helper 
        HelperDefault: {
            screen: HelperContainer,
            navigationOptions: { header: null }
        },
        HelperResult: {     // remove
            screen: HelperResultContainer,
            navigationOptions: { header: null }
        },
        HelperDetail: {
            screen: HelperDetailContainer,
            navigationOptions: { header: null }
        },
        HelperMap: {     // remove
            screen: HelperMapContainer,
            navigationOptions: { header: null }
        },

        // StockExchange
        StockExchangeDefault: {
            screen: StockExchangeContainer,
            navigationOptions: { header: null }
        },
        ResultStockExchange: {
            screen: ResultStockExchangeContainer,
            navigationOptions: { header: null }
        },
        StockExchangeDetail: {
            screen: StockExchangeDetailContainer,
            navigationOptions: { header: null }
        },
        
        // Account Tab
        AccountTaks: {
            screen: AccountTaks,
            navigationOptions: { header: null }
        },
        AccountInfo: {
            screen: AccountInfoContainer,
            navigationOptions: { header: null }
        },
        AccountInfoWork: {
            screen: AccountInfoWorkContainer,
            navigationOptions: { header: null }
        },
        AccountContact: {
            screen: AccountContactContainer,
            navigationOptions: { header: null }
        },
        AccountChannel: {
            screen: AccountChannelContainer,
            navigationOptions: { header: null }
        },
        AccountDocument: {
            screen: AccountDocumentContainer,
            navigationOptions: { header: null }
        },
        AccountUpgrade: {
            screen: AccountUpgradeContainer,
            navigationOptions: { header: null }
        },
        Consultation: {
            screen: ConsultationContainer,
            navigationOptions: { header: null }
        },
        ManageLoan: {
            screen: ManageLoanContainer,
            navigationOptions: { header: null }
        },
        LoanDetail: {
            screen: LoanDetailContainer,
            navigationOptions: { header: null }
        },
        History: {
            screen: HistoryContainer,
            navigationOptions: { header: null }
        },
        //
        PageSuccess: {
            screen: PageSuccess,
            navigationOptions: { header: null }
        },
    },
    { 
        initialRouteName: 'Menu',
        navigationOptions: {
            swipeEnabled: false,
            scrollEnabled: false,
            gesturesEnabled: false,
        }
        
    }
);

TabHomeNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};
export default TabHomeNavigator


