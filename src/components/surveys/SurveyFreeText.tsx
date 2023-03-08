import { CheckboxVisibility, DetailsList, Stack } from "@fluentui/react";
import { FunctionComponent } from "react";
import {IGroup} from "@fluentui/react/lib/components/GroupedList";
import {IColumn} from "@fluentui/react/lib/components/DetailsList/DetailsList.types";

interface Props {
    columns: IColumn[]
    groups: IGroup[]
    items: string[]
}

export const SurveyFreeText: FunctionComponent<Props> = ({ columns, groups, items }) => {
  const _onRenderColumn = (item?: any) => {
    return <div data-is-focusable={true}>{item}</div>;
  };

  return (
    <Stack data-testid="FreeTextTable">
      <DetailsList
        checkboxVisibility={CheckboxVisibility.hidden}
        items={items}
        groups={groups}
        columns={columns}
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        ariaLabelForSelectionColumn="Toggle selection"
        checkButtonAriaLabel="select row"
        checkButtonGroupAriaLabel="select section"
        groupProps={{
          isAllGroupsCollapsed: true,
          showEmptyGroups: true,
        }}
        onRenderItemColumn={_onRenderColumn}
        compact={true}
      />
    </Stack>
  );
};
