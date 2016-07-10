#Inputs
- User selects a material.
- User selects a hardness for that material.
- User selects a tool type.
- User can provide the diameter of the work piece.


#Outputs
- App displays the recommended RPM.
- Displays material options. <select>
- Then displays the hardness for that material. <select>
- Allows the use to <select> the tool types.
- 



##Formulas

N => Spindle Speed in rpms
V => Is the cutting speed in f/min or m/min for metric
D => Is the diameter of the work piece in either inches or millimeters.
12 => constant for imperial
1000 => constant for metric

1 inch = 1.000 for D, 3/4 inch = 0.750 for D

- Imperial
*The result is in feet per minute or f/min*
    N = ( 12 * V ) / ( π x D ) used to work out the spindle speed
    V = ( π * D * N ) / 12 used to work out the cutting speed

- Metric
*The result is in metres per minute or m/min*
    N = ( 1000 * V ) / ( π x D ) used to work out the spindle speed
    V = ( π * D * N ) / 1000 used to work out the cutting speed
    
    