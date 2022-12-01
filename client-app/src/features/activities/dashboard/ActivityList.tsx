
import { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


interface Props {
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ deleteActivity }: Props) {

    const { activityStore } = useStore();
    const { activities, selectActivity, editMode, loading } = activityStore;
    
    const [target, setTarget] = useState('');

    function handleActivityDelete(event: SyntheticEvent<HTMLButtonElement>, id:string) {

        setTarget(event.currentTarget.name);
        deleteActivity(id);

    }

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
                                <Button disabled={editMode} onClick={() => { selectActivity(activity.id) }} floated='right' content='View' color='blue' />
                                <Button 
                                name={activity.id}
                                disabled={editMode} 
                                loading={loading && target === activity.id} 
                                onClick={(event) => { handleActivityDelete(event, activity.id) }} 
                                floated='right' 
                                content='Delete' 
                                color='red' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}