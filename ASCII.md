## TuringMachine 圖靈機

```
+---------------------------------------------------------------------------+
|                                                                           |
|                                   3-state 2-symbol busy beaver            |
|  +--------------------+                                                   |
|  |                    |   -------------------------------------------     |
|  |   Turing Machine   |   STATE  READ  WRITE  MOVE  NEXT   5+tuples       |
|  |                    |     A      0     1      R     B   (A,0,1,R,B)     |
|  |     State:A        |     A      1     1      L     C   (A,1,1,L,C)     |
|  |                    |     B      0     1      L     A   (B,0,1,L,A)     |
|  +-------^------------+     B      1     1      R     B   (B,1,1,R,B)     |
|          |                  C      0     1      L     B   (C,0,1,L,B)     |
|          |                  C      1     1      R   HALT  (C,1,1,N,H)     |
|          |                                                                |
|  +---+ +-+-+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+  |
|  |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   |  |
|  | 1 | | 1 | | 0 | | 0 | | 1 | | 0 | | 1 | | 1 | | 0 | | 1 | | 1 | | 0 |  |
|  |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   |  |
|  +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+  |
|                                                                           |
+---------------------------------------------------------------------------+
```

## Oracle Machine

```
+---------------------------------------------------------------------------+
|                                                                           |
|                                    3state 2symbol busy beaver             |
|  +--------------------+                                                   |
|  |                    |   +-----------------------------------------+     |
|  |   Oracle Machine   |   STATE  READ  WRITE  MOVE  NEXT   5+tuples       |
|  |                    |     A      0     1      R     B   (A,0,1,R,B)     |
|  |     State:A        |     A      1     1      L     C   (A,1,1,L,C)     |
|  |                    |     B      0     1      L     A   (B,0,1,L,A)     |
|  +-------^------------+     B      1     1      R     O   (B,1,1,R,O)     |
|          |                  C      0     1      L     B   (C,0,1,L,B)     |
|          |                  C      1     1      R   HALT  (C,1,1,N,H)     |
|          |                  O      1     1    PAUSE                       |
|          |                                                                |
|          |                                                                |
|  +---+ +-+-+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+  |
|  |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   |  |
|  | 1 | | 1 | | 0 | | 0 | | 1 | | 0 | | 1 | | 1 | | 0 | | 1 | | 1 | | 0 |  |
|  |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   |  |
|  +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+  |
|                                                                           |
+---------------------------------------------------------------------------+
```

## Prisoner's dilemma

```
+---------------------------------+
|                                 |
|        Prisoner's Dilemma       |
|                                 |
|   Blue\Red  Cooperate  Defect   |
|                                 |
|  Cooperate     R\R       S\T    |
|                                 |
|     Defect     T\S       P\P    |
|                                 |
|         T > R > P > S           |
|                                 |
|  +---------------------------+  |
|                                 |
|             Cooperate  Defect   |
|                                 |
|                  10       12    |
|  Cooperate    10        5       |
|                                 |
|                   5        6    |
|     Defect    12        6       |
|                                 |
+---------------------------------+
```

## Prisoner's Dilemma + Oracle Machine

```
             +------+ Prisoner's Dilemma +-----+
             |                                 |
             |   Blue\Red   Cooperate  Defect  |
             |  +---------------------------+  |
             |  Cooperate      R\R       S\T   |
             |                                 |
             |     Defect      T\S       P\P   |
             |  +---------------------------+  |
             |                                 |
             |         T > R > P > S           |
             |                                 |
             +------+--------------------------+
                    |
+---------------------------------------------------------------------------+
|                   |                                                       |
|                   |                3state 2symbol busy beaver             |
|  +----------------v---+                                                   |
|  |                    |   +-----------------------------------------+     |
|  |   Oracle Machine   |   STATE  READ  WRITE  MOVE  NEXT   5+tuples       |
|  |                    |     A      0     1      R     B   (A,0,1,R,B)     |
|  |     State:A        |     A      1     1      L     C   (A,1,1,L,C)     |
|  |                    |     B      0     1      L     A   (B,0,1,L,A)     |
|  +-------^------------+     B      1     1      R     O   (B,1,1,R,O)     |
|          |                  C      0     1      L     B   (C,0,1,L,B)     |
|          |                  C      1     1      R   HALT  (C,1,1,N,H)     |
|          |                  O      1     1    PAUSE                       |
|          |                                                                |
|          |                                                                |
|  +---+ +-+-+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+  |
|  |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   |  |
|  | 1 | | 1 | | 0 | | 0 | | 1 | | 0 | | 1 | | 1 | | 0 | | 1 | | 1 | | 0 |  |
|  |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   | |   |  |
|  +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+  |
|                                                                           |
+---------------------------------------------------------------------------+
```
