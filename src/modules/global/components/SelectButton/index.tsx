import React, { useState } from 'react';
import { Modal, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
	ContentTextAndIcon,
	ModalContainer,
	ModalContent,
	SelectButtonContainer,
	TextSelected,
	ModalItem,
	ModalItemText,
	DescriptionSelectButton,
} from './styles';

const options = ['Alerta', 'Suspeito', 'Pedido de ajuda'];

interface SelectButtonProps {
	value: string;
	description: string;
	onSelectedItem: (item: string) => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({
	value,
	description,
	onSelectedItem,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	return (
		<>
			<DescriptionSelectButton>{description}</DescriptionSelectButton>
			<SelectButtonContainer onPress={() => setModalVisible(true)}>
				<ContentTextAndIcon>
					<TextSelected>{selectedValue ? selectedValue : value}</TextSelected>
					<FontAwesome name={'angle-down'} size={30} color={'#595959'} />
				</ContentTextAndIcon>
			</SelectButtonContainer>

			<Modal
				transparent={true}
				animationType="fade"
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}>
				<ModalContainer>
					<ModalContent>
						<FlatList
							data={options}
							keyExtractor={item => item}
							showsVerticalScrollIndicator={false}
							renderItem={({ item, index }) => (
								<TouchableOpacity
									onPress={() => {
										onSelectedItem(item);
										setSelectedValue(item);
										setModalVisible(false);
									}}>
									<ModalItem removeBorder={index === options.length - 1}>
										<ModalItemText>{item}</ModalItemText>
									</ModalItem>
								</TouchableOpacity>
							)}
						/>
					</ModalContent>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default SelectButton;
