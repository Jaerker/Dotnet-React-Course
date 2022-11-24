
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';


interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    editMode: boolean;
    deleteActivity: (id:string) => void;
}

export default function ActivityList({ activities, selectActivity, editMode, deleteActivity }: Props) {

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button disabled={editMode} onClick={() =>{selectActivity(activity.id)}} floated='right' content='View' color='blue' />
                                <Button disabled={editMode} onClick={() =>{deleteActivity(activity.id)}} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}