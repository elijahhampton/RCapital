import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Appbar, Button, DataTable, Divider, Title } from 'react-native-paper';
import styles from './styles';
import globalStyles, { appbarTheme } from '../../styles';
import TextDialog from '../../components/TextDialog/TextDialog';

const optionsPerPage = [2, 3, 4];

export default function SellStake({ navigation}) {
    const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
  const [stakeDialogIsVisible, setStakeDialogIsVisible] = useState(false);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

    const onDismissStakeDialog = () => {
        setStakeDialogIsVisible(false);
    }

    const onCancelSetStakeDialog = () => {
        onDismissStakeDialog();
    }

    const onAcceptStakeDialog = () => {
        onDismissStakeDialog();
    }

    const onPressSellStake = () => {

    }

    return (
        <View style={globalStyles.fullScreen}>
            <Appbar.Header theme={appbarTheme}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Title>
                    Sell Stake
                </Title>
            </Appbar.Header>
            <DataTable>
            <DataTable.Header>
        <DataTable.Title>Stake Amount</DataTable.Title>
        <DataTable.Title numeric>Pool Term</DataTable.Title>
        <DataTable.Title numeric />
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>8394.93 ALGO</DataTable.Cell>
        <DataTable.Cell numeric>84 mo (5x)</DataTable.Cell>
        <DataTable.Cell numeric><Button onPress={onPressSellStake}> Sell </Button></DataTable.Cell>
      </DataTable.Row>
      <Divider style={styles.divider} />
      <DataTable.Row>
        <DataTable.Cell>506.32 ALGO</DataTable.Cell>
        <DataTable.Cell numeric>5 mo (1x)</DataTable.Cell>
        <DataTable.Cell numeric><Button onPress={onPressSellStake}> Sell </Button></DataTable.Cell>
      </DataTable.Row>
      <Divider style={styles.divider} />
            </DataTable>
            <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />


<TextDialog 
                    isVisible={stakeDialogIsVisible}
                    content='You are about to sell 596.32 ALGO in your 84 mo (5x) stake.  Would you like to proceed?'
                    acceptTitle='Stake'
                    onAccept={onAcceptStakeDialog}
                    onCancel={onCancelSetStakeDialog}
                    onDismiss={onDismissStakeDialog}
                />
        </View>
    )
}