import { DialogTrigger, ActionButton, Dialog, Heading, Flex, Divider, Text, Content } from "@adobe/react-spectrum";
import BreedCardColumn from './BreedCardColumn';
import { BreedType, CompareDialogPropsType } from '../types';

const CompareDialog: React.FC<CompareDialogPropsType> = (props) => {
  const { breeds, comparedBreedIds } = props;
  return (
    <DialogTrigger isDismissable>
      <ActionButton isDisabled={comparedBreedIds.length <= 1} margin="40px">Show Compared Breeds</ActionButton>
      {(close) => {
        const comparedBreeds = breeds.filter((breed: BreedType) => comparedBreedIds.includes(breed.id));
        return (
          <Dialog >
            <Heading>
              <Flex alignItems="center" gap="size-100">
                <Text>
                  Compared Breeds
                </Text>
              </Flex>
            </Heading>
            <Divider />
            <Content>
              <Flex direction="row" justifyContent="space-evenly" >
                {
                  comparedBreeds.map((breed: BreedType, idx: number) => (
                    <BreedCardColumn breed={breed} key={`${breed.id}_BreedCardColumn`} />))}
              </Flex>
            </Content>
          </Dialog>
        );
      }}
    </DialogTrigger >
  );
}
export default CompareDialog;